  const stok = {
      'UANG IC': 10000000,
      'UANG IC VIA LOGIN': 0,
      'De': 10000,
  'Slc': 10000,
  'Rif': 10000,
  'sg': 10000,
  'AK': 10000,
  'Kevlar': 0,
  'Marjun': 999,
  'Perban': 999,
  'Pil': 999,
  'Makan minum': 999,
    'Paket Sotot 1':999,
    'Paket Sotot 2':999,
    'Paket Sotot 3':999,
    'Paket Sotot Sultan':999
    };

    function updateStok() {
      const toggle = (id, stokKey, labelId, name) => {
        const btn = document.getElementById(id);
        const stokVal = stok[stokKey];
        const p = document.getElementById(labelId);

        if (stokVal > 0) {
          btn.onclick = () => goToPayment(name);
          p.innerText = `Stok: ${stokVal}`;
        } else {
          btn.disabled = true;
          btn.classList.add('out-of-stock');
          btn.innerText = 'Stok Habis';
          p.innerText = `Stok: 0`;
        }
      };

      toggle('uic', 'UANG IC', 'stok-uang-ic', 'UANG IC');
      toggle('uicvilog', 'UANG IC VIA LOGIN', 'stok-uang-ic-login', 'UANG IC VIA LOGIN');
      toggle('senjata1', 'De', 'senjata-1', 'Dessert Eagle');
      toggle('senjata2', 'Slc', 'senjata-2', 'Silenced Pistol');
      toggle('senjata3', 'Rif', 'senjata-3', 'Riffle');
      toggle('senjata4', 'sg', 'senjata-4', 'Sg');
      toggle('senjata5', 'AK', 'senjata-5', 'AK47');
      toggle('item-kevlar', 'Kevlar', 'stok-kevlar', 'Kevlar');
      toggle('item-marjun', 'Marjun', 'stok-marjun', 'Marjun');
      toggle('item-perban', 'Perban', 'stok-perban', 'Perban');
      toggle('item-pil', 'Pil', 'stok-pil', 'Pill Stress');
      toggle('item-makanminum', 'Makan minum', 'stok-makanminum', 'Makan Minum');
      toggle('item-sotot1', 'Paket Sotot 1', 'stock-sotot1', 'Paket Sotot 1');
      toggle('item-sotot2', 'Paket Sotot 2', 'stock-sotot2', 'Paket Sotot 2');
      toggle('item-sotot3', 'Paket Sotot 3', 'stock-sotot3', 'Paket Sotot 3');
      toggle('item-sotot4', 'Paket Sotot Sultan', 'stock-sotot4', 'Paket Sotot Sultan');
    }

    function goToPayment(productName) {
      localStorage.setItem('productName', productName);
      window.location.href = 'payment.html';
    }

    function showSection(sectionId) {
      const sections = ['uic-section', 'senjata-section', 'item-section'];
      sections.forEach(id => {
        const el = document.getElementById(id);
        el.classList.toggle('hidden', id !== sectionId);
      });

      document.querySelectorAll('nav.menu-header a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').replace('#', '') === sectionId);
      });
    }

    document.querySelectorAll('nav.menu-header a').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').replace('#', '');
        showSection(sectionId);
      });
    });

    updateStok();
    showSection('uic-section'); // tampilkan default
