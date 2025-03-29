function cekKelayakan() {
    const tugas = "Memastikan program yang dibuat sudah sesuai dengan requirement";
    
    const dailyActivities = [
        "Memahami requirement program yang akan dibuat",
        "Membuat unit test sesuai dengan requirement",
        "Membuat program sesuai dengan requirement yang diberikan",
        "Memvalidasi kepada pihak user apakah program sudah sesuai dengan kebutuhan"
    ];

    let userExperience = document.getElementById("userExperience").value.split("\n").map(item => item.trim());

    if (JSON.stringify(dailyActivities) === JSON.stringify(userExperience)) {
        document.getElementById("result").innerHTML = "✅ Anda memenuhi syarat! Silakan melamar.";
        document.getElementById("result").style.color = "green";
    } else {
        document.getElementById("result").innerHTML = "❌ Coba sesuaikan pengalaman Anda dengan aktivitas yang dibutuhkan.";
        document.getElementById("result").style.color = "red";
    }
}
