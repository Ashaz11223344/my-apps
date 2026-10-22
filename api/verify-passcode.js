export default function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const enteredPasscode = (body.passcode || '').toString().trim();
    const serverPasscode = (process.env.AUTH_PASSCODE || '2008').toString().trim();

    if (enteredPasscode === serverPasscode) {
      return res.status(200).json({
        success: true,
        redirectUrl: 'https://tomylovesmiti.qzz.io',
        message: 'Welcome — You are Trusted by Ashaz ✨',
      });
    }

    return res.status(401).json({
      success: false,
      redirectUrl: 'https://youtu.be/iik25wqIuFo?list=RDiik25wqIuFo',
      message: 'Access denied — wrong passcode',
    });
  } catch (error) {
    return res.status(400).json({ success: false, error: 'Malformed request payload' });
  }
}
