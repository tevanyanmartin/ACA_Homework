$(document).ready(function () {
    let d = new Date()
    let table = $('#table')
    let errorDiv = $('#error')
    let id = 0;
    let del = $('.delete')
    $('#add-task').click(function () {
        let task = $('#task-input').val();
        let personName = $('#person-name').val();
        if (task.length > 1 && personName.length > 1) {
            id++
            table.append(`<tr><td>${id}</td><td>${personName}</td><td><textarea disabled class="task-content">${task}</textarea></td>
        <td> ${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}  ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}</td>
                    <td><button type="submit" class="delete"></button></td>  
                  </tr>`)
            $('#task-input').val('')
            $('#person-name').val('')
            del = $('.delete')
            deleteList(del)
            if (errorDiv.children()) {
                errorDiv.children().remove()
            }
        } else {
            errorDiv.children().remove()
            errorDiv.append(`<a>Person Name or task input empty </a>`)
        }
    })

    function deleteList(obj) {
        obj.click(function () {
            $(this).parent().parent().remove()
        })
    }

    deleteList(del)
})