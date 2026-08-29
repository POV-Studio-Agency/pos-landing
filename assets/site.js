const menuToggle = document.getElementById('menuToggle')
const mainNav = document.getElementById('mainNav')

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open')
    menuToggle.setAttribute('aria-expanded', String(open))
  })
  mainNav.addEventListener('click', () => {
    mainNav.classList.remove('open')
    menuToggle.setAttribute('aria-expanded', 'false')
  })
}

const billing = {
  monthly: {
    value: 'Rp150.000',
    period: '/ bulan',
    note: 'Bayar bulanan, dapat dibatalkan sesuai ketentuan layanan.',
    subject: 'Berlangganan POSITIF Bulanan',
  },
  yearly: {
    value: 'Rp1.500.000',
    period: '/ tahun',
    note: 'Setara Rp125.000 per bulan — hemat Rp300.000 setahun.',
    subject: 'Berlangganan POSITIF Tahunan',
  },
}

document.querySelectorAll('[data-billing]').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-billing]').forEach((item) => item.classList.remove('active'))
    button.classList.add('active')
    const data = billing[button.dataset.billing]
    document.getElementById('priceValue').textContent = data.value
    document.getElementById('pricePeriod').textContent = data.period
    document.getElementById('priceNote').textContent = data.note
    document.getElementById('pricingCta').href = `mailto:halo@pospositif.com?subject=${encodeURIComponent(data.subject)}`
  })
})
