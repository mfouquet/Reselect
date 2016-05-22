// Snagged from the wonderful resource at https://gist.github.com/abynim/04fd575a7e63ae2908a9 by abynim

var writeTextToFile = function(text, filePath) {
    var t = [NSString stringWithFormat:@"%@", text],
    f = [NSString stringWithFormat:@"%@", filePath];
    return [t writeToFile:f atomically:true encoding:NSUTF8StringEncoding error:nil];
}

var jsonFromFile = function(filePath, mutable) {
  var data = [NSData dataWithContentsOfFile:filePath];
  if (!data) {
    return null;
  }

  var options = mutable == true ? NSJSONReadingMutableContainers : 0
  return [NSJSONSerialization JSONObjectWithData:data options:options error:nil];
}

var saveJsonToFile = function(jsonObj, filePath) {
    writeTextToFile(stringify(jsonObj), filePath);
}

var stringify = function(obj, prettyPrinted) {
    var prettySetting = prettyPrinted ? NSJSONWritingPrettyPrinted : 0,
    jsonData = [NSJSONSerialization dataWithJSONObject:obj options:prettySetting error:nil];
    return [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding];
}

var removeFileOrFolder = function(filePath) {
    [[NSFileManager defaultManager] removeItemAtPath:filePath error:nil];
}
