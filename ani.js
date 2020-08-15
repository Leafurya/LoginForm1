function StartUnrockDoorAni(){
	var rightDoor=document.querySelector(".door_r");
	var leftDoor=document.querySelector(".door_l");
	var rockHandle=document.querySelector(".rock_handle");

	var rockEmpty=document.querySelector(".empty");
	var rockEmpty1=document.querySelector(".empty_t1");
	var rockEmpty2=document.querySelector(".empty_t2");

	rockHandle.classList.add('start_unrock_ani');
	setTimeout(function(){
		leftDoor.classList.add('start_open_left_door');
		rightDoor.classList.add('start_open_right_door');
		
		setTimeout(function(){
			rockEmpty.classList.add('change_color');
			rockEmpty1.classList.add('change_color');
			rockEmpty2.classList.add('change_color');
		},25);

		setTimeout(function(){
			//location.href='main.html'
		},850);
	},400);
}