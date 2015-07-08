/*
*
    COPYRIGHT LICENSE: This information contains sample code provided in source code form. You may copy, modify, and distribute
    these sample programs in any form without payment to IBM® for the purposes of developing, using, marketing or distributing
    application programs conforming to the application programming interface for the operating platform for which the sample code is written.
    Notwithstanding anything to the contrary, IBM PROVIDES THE SAMPLE SOURCE CODE ON AN "AS IS" BASIS AND IBM DISCLAIMS ALL WARRANTIES,
    EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, SATISFACTORY QUALITY,
    FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND ANY WARRANTY OR CONDITION OF NON-INFRINGEMENT. IBM SHALL NOT BE LIABLE FOR ANY DIRECT,
    INDIRECT, INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR OPERATION OF THE SAMPLE SOURCE CODE.
    IBM HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS OR MODIFICATIONS TO THE SAMPLE SOURCE CODE.

*/

// This method is invoked after loading the main HTML and successful initialization of the MobileFirst runtime.
function wlEnvInit(){
    wlCommonInit();
	
    WL.TabBar.init();
	WL.TabBar.addItem("item1", function(){ alert("item 1 pressed"); }, "item 1 title", {image : "tabButton:Search"});	
	WL.TabBar.addItem("item2", function(){ alert("item 2 pressed"); }, "item 2 title", {image : "tabButton:More"});
	WL.TabBar.addItem("item3", function(){ alert("item 3 pressed"); }, "item 3 title", {image : "tabButton:Downloads"});
	WL.TabBar.addItem("item4", function(){ alert("item 4 pressed"); }, "item 4 title", {image : "tabButton:Recents"});
	WL.TabBar.addItem("item5", function(){ alert("item 5 pressed"); }, "item 5 title", {image : "tabButton:Contacts"});
	WL.TabBar.setVisible(true);		
}