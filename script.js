document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

let playerData = {};

function registerPlayer() {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  if(!username || !email) return alert("املأ جميع الحقول");
  playerData.username = username;
  playerData.email = email;
  alert("تم التسجيل!");
}

function activateCode() {
  const code = document.getElementById("activationCode").value;
  alert(code === "1234" ? "تم التفعيل!" : "الكود غير صحيح");
}

async function submitSuggestion() {
  const suggestion = document.getElementById("suggestionText").value;
  if(!suggestion) return alert("اكتب اقتراحك");
  // إرسال الاستبيان لسيرفر ديسكورد
  try {
    await fetch('/api/survey', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ playerData, suggestion })
    });
    alert("تم إرسال الاقتراح!");
    document.getElementById("suggestionText").value = "";
  } catch (err) {
    alert("حدث خطأ أثناء الإرسال");
  }
}
