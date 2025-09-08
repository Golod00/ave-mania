export async function POST(req) {
    try {
        const { formCompany, formName, formTel, formEmail, formText } = await req.json();

        if (!formName || !formTel || !formEmail || !formText) {
            return new Response(JSON.stringify({ ok: false, error: 'Missing required fields' }), {
                status: 400,
            });
        }

        const token = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        const text =
            `<b>Нове повідомлення з сайту</b>\n` +
            `🏢 <b>Компанія:</b> ${escapeHtml(formCompany || '-')}\n` +
            `👤 <b>Контактна особа:</b> ${escapeHtml(formName)}\n` +
            `📞 <b>Телефон:</b> ${escapeHtml(formTel)}\n` +
            `✉️ <b>Email:</b> ${escapeHtml(formEmail)}\n` +
            `💬 <b>Коментар:</b>\n${escapeHtml(formText)}`;

        const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text,
                parse_mode: 'HTML',
                disable_web_page_preview: true,
            }),
        });

        if (!tgRes.ok) {
            const err = await tgRes.text();
            return new Response(JSON.stringify({ ok: false, error: `Telegram error: ${err}` }), {
                status: 502,
            });
        }

        return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } catch (e) {
        return new Response(JSON.stringify({ ok: false, error: e.message }), { status: 500 });
    }
}

function escapeHtml(str) {
    return String(str).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}
