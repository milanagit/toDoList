<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do App</title>

<!-- Font Awesome from https://cdnjs.com/libraries -->
<!-- From https://fontawesome.com/icons/ you can import icons in the body code where needed -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <link rel=stylesheet href="style.css">
</head>

<body>
    <div class="container">
        <div class="todo-app">
            <h1>To Do App</h1>
            <form action="" class="input-area">
                <input type="text" id="task-input" placeholder="Add new Task...">
                <button type="submit" id=""add-task-btn><i class="fa-solid fa-plus"></i></button>
            </form>
            <div class="todos-container">
                <ul id="task-list">
                    <li>CSSnippets</li>
                    <li>html</li>
                    <li>css</li>
                </ul>
                <img src="images/job_done.jpg" alt="empty" class="empty-img">
            </div>
        </div>
    </div>
</body>
<script src="script.js"></script>

</html>