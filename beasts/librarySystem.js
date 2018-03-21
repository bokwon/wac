// v3. 
//librarySystem('name', [], function() {
//  return 'Gordon';
//});
//
//librarySystem('company', [], function() {
//  return 'Watch and Code';
//});
//
//debugger;
//librarySystem('workBlurb', ['name', 'company'], function(name, company) {
//  return name + ' works at ' + company;
//});
//
//librarySystem('workBlurb'); // 'Gordon works at Watch and Code'

(function(){
	
	var libraryStorage = {};
	
	function librarySystem(libraryName, dependencies, callback)
	{
		if(arguments.length > 1)
		{
			if(Array.isArray(arguments[1])) // passed dependency
			{
				// 1. pass second arguments with ['dependency']
				if(arguments[1].length > 0)
				{
						var dependencyArr = [];
						for(var i=0; i<arguments[1].length; i++){
								dependencyArr.push(libraryStorage[arguments[1][i]]);
						}
						
						libraryStorage[libraryName] = callback.apply(this, [libraryStorage["name"],libraryStorage["company"]]);
							
				} else {
					// 2. pass second arguments with empty array.
					libraryStorage[libraryName] = callback();
				}
			} 
			else {
				libraryStorage[libraryName] = callback();	
			}
				
		} else {
			
			return libraryStorage[libraryName];
		}
	}
	
	window.librarySystem = librarySystem;
})();


