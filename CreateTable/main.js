/**
 * Created by Administrator on 2016/10/26.
 */
(function () {


    var students = [
        {name: "ZhangSan", score: 80},
        {name: "LiSi", score: 30},
        {name: "ucai", score: 90},
        {name: "WangWu", score: 60},
        {name: "ZhaoLiu", score: 20}
    ];

    function creatTableRow(student) {
        var tr=$("<tr></tr>");

        var td=$("<td>"+student.name+"</td>");
        tr.append(td);

         td=$("<td>"+student.score+"</td>");
        tr.append(td);

        return tr;
    }

    function createTable(student) {
        var table=$("table");

        students.forEach(function (item) {
            table.append(creatTableRow(item));
        })
    }
    createTable();

})();