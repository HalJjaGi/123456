//공유하기 버튼
$('share').click(function (e) { 
    e.preventDefault();

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(this).attr('data-clipboard-text')).select();
    document.execCommand("copy");
    $temp.remove();

    alert("유튜브 링크가 클립보드에 복사되었습니다.");
});

//내 아이콘 누르면 내 유튜브
$('.Logo > span').click(function (e) { 
    e.preventDefault();
    
    window.open("https://www.youtube.com/channel/UCALR02LmDJgOi7eh7umJwKA");
});

//검색어 입력하고 검색버튼 누르면 막 뜸
$('#searchButton').click(function (e) { 
    e.preventDefault();

    $('#searchText').toggleClass('toggle');
    
});

//검색 그거에서 글자쓰면 필터
$('#searchText').keyup(function (e) {

        var word = $(this).val();

        $('article').hide();

        var temp = $('searchWord:contains("' + word + '")');

        $(temp).parent().show();
        $(temp).show();
        
});

