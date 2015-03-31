/*! Cloud Pricing Slider */

$(document).ready(function () {
	//enable slider
	$('#qsSlider').qsSlider({
			
		// Pricing
		PriceBase :	'45.12', 	// base price should be as per slider calculation (1CPU + 256MB RAM + 50GB HDD)
		PriceCPU :	'15.00', 	// per month per unit
		PriceRAM :	'20.48', 	// per month per 1024 MB
		PriceHDD :	'5.00',  	// per month per 10 GB
				
		// Maximum Slider values
		MaxCPU	: '16',		// Maximum CPU
		MaxRAM	: '14',		// Maximum RAM //It should be + 2 like if you want maximum RAM 16 GB then make it 18 etc..		
		MaxHDD	: '50',		// Maximum HDD //Its for 500 GB HDD Storage maximum, if want to change it make 100 for 1000 GB, 150 For 1500GB and so on..

		
		//Buy now options
		//To send slider values to WHMCS order form
		//Please refer to the URL to know how to Link and configure for WHMCS http://docs.whmcs.com/Linking_to_WHMCS
		// and http://docs.whmcs.com/Products_and_Services#Configurable_Options for configuration option setup
		
		//Also, please make sure all configured prices in slider match with your WHMCS configuration options pricings.
		
		//If you want to use with any other Billing softwares or custom order form, you can use as per their accepted CURL values.
				
		BuyNowLink : '#',
				
		//Configuration Options for CPU, RAM and HDD
		cpuID : '&configoption[199]=',
		ramID : '&configoption[194]=',
		hddID : '&configoption[193]=',
				
		//Control Panel Configuration Options
		cpID : '&configoption[196]=',
				
		//Control Panel Price - Default is $10
		cPanelPrice : '10',
				
		//Configuration Option Valuse IDs for control panel yes/no
		cpYesID : '905',
		cpNoID : '904',
		
		
		//-----------Additonal options------------//
		
		//Make discount on annually billing like 0.10 for 10% - //defualt option - no discount on annually biling.
		discount	: '0.25',
				
		//Default Preset Configuration				
		defaultPreset : 's', //can use any i.e. xs, s, m, or xl
				
		//Tooltips Contents
		TipsXS	: 'Ideal for simple websites, secondary nameservers & small test environments.',
		TipsS	: 'Ideal for wordpress, drupal and other CMS, forums and medium sized web shops.',
		TipsM	: 'Ideal for complex web apps, multiple busy sites, forums or web shops.',
		TipsL	: 'Ideal for cPanel and other hosting controlpanels as well as busy sites and forums.',
		TipsXL	: 'Ideal for high powered, very busy complex web apps or a busy hosting controlpanel.'


		//To configure preset buttons selected slider values 
		//For now you need to edit main qs.slider.js
		//(chnage values in lines 204 - 208) i.e. xs:  { cpu: "3",  ram: "4",  hdd: "10" }, etc..
		
	});
		
});