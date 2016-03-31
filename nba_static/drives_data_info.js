var playerDrivesParser = function(players) {
  var players_drives = []
  for(var i = 0; i < players.length; i ++ ){
    players_drives.push(new drive_player(players[i]))
  }
  ishCleaner(players_drives)
  return players_drives
}

var playerFinder = function(player_name, players) {
    for(var p=0; p < players.length; p++){
      if(players[p].name == player_name){
        return players[p]
      }
    }
  }

function drive_player(entry) {
  this.player_id = entry[0]
  this.name = entry[1]
  this.first_name = entry[2]
  this.last_name = entry[3]
  this.team_abrv = entry[4]
  this.games_played = entry[5]
  this.mins_per_game = entry[6]
  this.drives_per_game = entry[7]
  this.points_from_drives_per_game = entry[8]
  this.dtp = entry[9]
  this.fg_pct_on_drives = entry[10]
  this.pts_48_on_drives = entry[11]
  this.points_from_drives_total = entry[12]
  this.total_drives = entry[13]
}

var updatePlayerAttributes = function(current_player){
  $("#player_name").text(current_player.name)
  $("#team_name").text(current_player.team_abrv)
  $("#drives_per_game").text("Drives Per Game: " + current_player.drives_per_game)
  $("#fg_pct_drives").text("FG% on Drives: " + (current_player.fg_pct_on_drives * 100) + "%")
  $("#total_points_from_drives").text("Points from Drives Total: " + current_player.points_from_drives_total)
  // $("#total_drives").text(total_drives)
  $("#player_image").html("<img src='http://stats.nba.com/media/players/230x185/" + current_player.player_id + ".png'>")
}

//Getting 3 Ish Smiths from NBA Stats for some reason.
var ishCleaner = function(players_drives){
  if(players_drives[4].name == "Ish Smith"){
    players_drives.splice(4,1)
  }
  if(players_drives[15].name == "Ish Smith"){
    players_drives.splice(15,1)
  }
}