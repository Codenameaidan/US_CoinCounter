#pragma strict
import UnityEngine.UI;
public var text : Text;
public var sound : AudioClip;
public var resetSound : AudioClip;

private var audio1 : AudioSource;
private var money : float;
function Start () {
	audio1 = this.GetComponent(typeof AudioSource);	
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Q)){
		money += 0.25f;
		UpdateText();
	}
	if(Input.GetKeyDown(KeyCode.N)){
		money += 0.05f;
		UpdateText();
	}
	if(Input.GetKeyDown(KeyCode.P) || Input.GetKeyDown(KeyCode.LeftShift)){
		money += 0.01f;
		UpdateText();
	}
	if(Input.GetKeyDown(KeyCode.D)){
		money += 0.10f;
		UpdateText();
	}
	if(Input.GetKeyDown(KeyCode.H)){
		money += 0.50f;
		UpdateText();
	}
}
function UpdateText(){
	money = (Mathf.Round(money * 100)/100);
	text.text = "$"+money.ToString();
	audio1.PlayOneShot(sound);
	//text.text = "$"+money.toFixed(2);
}

function AddMoney(amount : float){
	money += amount;
	UpdateText();

}

function Reset(){
	money = 0.0f;
	text.text = "$0.00";
	audio1.PlayOneShot(resetSound);
	//UpdateText();

}