window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.style.boxShadow = window.scrollY > 50 ? "0px 2px 10px rgba(0, 0, 0, 0.2)" : "none";
});
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
});
document.addEventListener("DOMContentLoaded", function () {
    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (!localStorage.getItem("loggedInUser") && window.location.pathname !== "/auth.html") {
        window.location.href = "auth.html"; // Chuyển hướng về trang đăng nhập
    }

    // Xử lý đăng nhập
    let loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let errorMsg = document.getElementById("error-msg");

            let users = JSON.parse(localStorage.getItem("users")) || [];
            let validUser = users.find(user => user.username === username && user.password === password);

            if (validUser) {
                localStorage.setItem("loggedInUser", username); // Lưu trạng thái đăng nhập
                alert("Đăng nhập thành công!");
                window.location.href = "index.html";
            } else {
                errorMsg.textContent = "Sai tài khoản hoặc mật khẩu!";
            }
        });
    }

    // Xử lý đăng ký
    let registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let fullName = document.getElementById("full-name").value;
            let email = document.getElementById("email").value;
            let newUsername = document.getElementById("new-username").value;
            let newPassword = document.getElementById("new-password").value;
            let registerMsg = document.getElementById("register-msg");

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push({ username: newUsername, password: newPassword, fullName, email });
            localStorage.setItem("users", JSON.stringify(users));

            registerMsg.textContent = "Đăng ký thành công! Chuyển sang đăng nhập...";
            setTimeout(() => window.location.href = "auth.html", 2000);
        });
    }

    // Xử lý đăng xuất
    let logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("loggedInUser"); // Xóa trạng thái đăng nhập
            alert("Bạn đã đăng xuất!");
            window.location.href = "auth.html";
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let loginTab = document.getElementById("login-tab");
    let registerTab = document.getElementById("register-tab");
    let loginForm = document.getElementById("login-form");
    let registerForm = document.getElementById("register-form");

    // Chuyển sang form đăng nhập
    window.showLogin = function() {
        loginForm.classList.remove("hidden");
        registerForm.classList.add("hidden");
        loginTab.classList.add("active");
        registerTab.classList.remove("active");
    };

    // Chuyển sang form đăng ký
    window.showRegister = function() {
        registerForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
        registerTab.classList.add("active");
        loginTab.classList.remove("active");
    };

    // Xử lý đăng ký
    let registerSubmit = registerForm.querySelector("form");
    registerSubmit.addEventListener("submit", function (event) {
        event.preventDefault();

        let fullName = document.getElementById("full-name").value;
        let email = document.getElementById("email").value;
        let newUsername = document.getElementById("new-username").value;
        let newPassword = document.getElementById("new-password").value;
        let registerMsg = document.getElementById("register-msg");

        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ username: newUsername, password: newPassword, fullName, email });
        localStorage.setItem("users", JSON.stringify(users));

        registerMsg.textContent = "Đăng ký thành công! Chuyển sang đăng nhập...";
        setTimeout(() => showLogin(), 2000);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Khi trang đã load, thêm class 'loaded' để hiển thị mượt mà
    document.body.classList.add("loaded");

    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (!localStorage.getItem("loggedInUser") && window.location.pathname !== "/auth.html") {
        document.body.classList.add("fade-out"); // Hiệu ứng khi chuyển trang
        setTimeout(() => window.location.href = "auth.html", 500);
    }

    // Xử lý đăng nhập
    let loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
            let errorMsg = document.getElementById("error-msg");

            let users = JSON.parse(localStorage.getItem("users")) || [];
            let validUser = users.find(user => user.username === username && user.password === password);

            if (validUser) {
                localStorage.setItem("loggedInUser", username); // Lưu trạng thái đăng nhập
                document.body.classList.add("fade-out");
                setTimeout(() => window.location.href = "index.html", 500);
            } else {
                errorMsg.textContent = "Sai tài khoản hoặc mật khẩu!";
            }
        });
    }

    // Xử lý đăng ký
    let registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let fullName = document.getElementById("full-name").value;
            let email = document.getElementById("email").value;
            let newUsername = document.getElementById("new-username").value;
            let newPassword = document.getElementById("new-password").value;
            let registerMsg = document.getElementById("register-msg");

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push({ username: newUsername, password: newPassword, fullName, email });
            localStorage.setItem("users", JSON.stringify(users));

            registerMsg.textContent = "Đăng ký thành công! Chuyển sang đăng nhập...";
            setTimeout(() => {
                document.body.classList.add("fade-out");
                setTimeout(() => window.location.href = "auth.html", 500);
            }, 2000);
        });
    }

    // Xử lý đăng xuất
    let logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            localStorage.removeItem("loggedInUser"); // Xóa trạng thái đăng nhập
            document.body.classList.add("fade-out");
            setTimeout(() => window.location.href = "auth.html", 500);
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    console.log("Trang đã tải hoàn tất");

    // Kiểm tra xem người dùng đã đăng nhập chưa
    if (!localStorage.getItem("loggedInUser") && window.location.pathname !== "/auth.html") {
        console.log("Người dùng chưa đăng nhập, chuyển về auth.html");
        document.body.classList.add("fade-out");
        setTimeout(() => window.location.href = "auth.html", 500);
    }

    // Xử lý đăng xuất
    let logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            console.log("Nút đăng xuất được bấm!");
            localStorage.removeItem("loggedInUser"); // Xóa trạng thái đăng nhập
            document.body.classList.add("fade-out");
            setTimeout(() => window.location.href = "auth.html", 500);
        });
    } else {
        console.log("Không tìm thấy nút đăng xuất!");
    }
});

