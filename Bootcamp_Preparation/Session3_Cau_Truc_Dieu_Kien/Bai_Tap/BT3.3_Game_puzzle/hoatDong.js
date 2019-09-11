var hinh1= document.getElementById('image_1');
var hinh2= document.getElementById('image_2');
var hinh3= document.getElementById('image_3');
var hinh4= document.getElementById('image_4');
var hinh5= document.getElementById('image_5');

var hinh =
[ hinh1, hinh2, hinh3, hinh4, hinh5 ];

var Images = {
	imgsDB: 
	[
        ["funny-cat1_part1x1.jpg", 
        "funny-cat1_part2x1.jpg", 
        "funny-cat1_part3x1.jpg", 
        "funny-cat1_part4x1.jpg", 
        "funny-cat1_part5x1.jpg"],
        ["monkey_part1x1.jpg",
        "monkey_part2x1.jpg",
        "monkey_part3x1.jpg",
        "monkey_part4x1.jpg",
        "monkey_part5x1.jpg"],
        ["panda_swap_part1x1.jpg",
        "panda_swap_part2x1.jpg",
        "panda_swap_part3x1.jpg",
        "panda_swap_part4x1.jpg",
        "panda_swap_part5x1.jpg"]
	],
	imgpos: [0, 0, 0, 0, 0]
}
//function putImage(imagePos, imagePiece){
 //   Images.imgpos[imagePos] = imagePiece;
//}

function randomImage(){
    for (let i=0;i<5;i++){
        let imagePiece = Math.floor( Math.random() * 3 );
        Images.imgpos[i] = imagePiece;
    }
}

function openPage(){
    randomImage();
    reloadPage();
}
function reloadPage(){
    let check = true;
    for (let i=0;i<5;i++){
        imagePos = Images.imgpos[i];
        hinh[i].src = 'image/' + Images.imgsDB[imagePos][i];
        if ((i<4) && (imagePos !== Images.imgpos[i+1]))
            check=false;
    }

    if(check){
        document.write("Bạn đã hoàn thành trò chơi");
    }
    
}

function clickImage(val){
    switch (val){
        case 'image_1':
            if (Images.imgpos[0]<2)
                    Images.imgpos[0]++;
            else Images.imgpos[0] = 0;
            break;
        case 'image_2':
            if (Images.imgpos[1]<2)
                Images.imgpos[1]++;
            else Images.imgpos[1] = 0;
            break;
        case 'image_3':
            if (Images.imgpos[2]<2)
                Images.imgpos[2]++;
            else Images.imgpos[2] = 0;
            break;   
        case 'image_4':
            if (Images.imgpos[3]<2)
                Images.imgpos[3]++;
            else Images.imgpos[3] = 0;
            break;
        case 'image_5':
            if (Images.imgpos[4]<2)
                Images.imgpos[4]++;
            else Images.imgpos[4] = 0;
            break;
    }
    reloadPage();
}