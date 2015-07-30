/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// This method is invoked after loading the main HTML and successful initialization of the MobileFirst runtime.
function wlEnvInit(){
    wlCommonInit();
    // Environment initialization code goes here
    
    WL.TabBar.init();
    WL.TabBar.addItem("item1", function(){ alert("item 1 pressed"); },"Search",{
    	image: "images/search.png",
    	imageSelected : "images/search_selected.png"
    });
    WL.TabBar.addItem("item2", function(){ alert("item 2 pressed"); },"More",{
    	image: "images/more.png",
    	imageSelected : "images/more_selected.png"
    });
    WL.TabBar.addItem("item3", function(){ alert("item 3 pressed"); },"Downloads",{
    	image: "images/downloads.png",
    	imageSelected : "images/downloads_selected.png"
    });
    WL.TabBar.addItem("item4", function(){ alert("item 4 pressed"); },"Recents",{
    	image: "images/recents.png",
    	imageSelected : "images/recents_selected.png"
    });
    WL.TabBar.addItem("item5", function(){ alert("item 5 pressed"); },"Contacts",{
    	image: "images/contacts.png",
    	imageSelected : "images/contacts_selected.png"
    });
    WL.TabBar.setVisible(true);
  
    
    WL.OptionsMenu.init();
    WL.OptionsMenu.addItem("item1", function(){ alert("item 1 pressed"); }, "Search", {
    	image: "search.png"
    });
    WL.OptionsMenu.addItem("item2", function(){ alert("item 2 pressed"); }, "Contacts", {
    	image: "contacts.png"
    });
    
    
}