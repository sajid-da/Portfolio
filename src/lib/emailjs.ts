import emailjs from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  publicKey: 'M1s90RWx-HZObysXZ',
  serviceId: 'service_b4t7d1n',
  templateId: 'template_zmvcy4a',
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey);

export const sendEmail = async (templateParams: Record<string, unknown>) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );
    return response;
  } catch (error) {
    console.error('EmailJS error:', error);
    throw error;
  }
};