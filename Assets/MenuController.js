#pragma strict

public var helpMenu : GameObject;
function Start () {
	
}

function Update () {
	
}
public function help(){
	helpMenu.SetActive(true);

}

public function disableHelp(){
	helpMenu.SetActive(false);

}