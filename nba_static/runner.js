$(document).ready(function() {
  var players = playerDrivesParser(drivesData.resultSets[0].rowSet)
  updatePlayerAttributes(players[0])
  $(function () {
      $('#points_container').highcharts({
          chart: {
              type: 'bar',
              backgroundColor:'transparent'
          },
          title: {
            style: {
              color: "#FFF"
            },
              text: 'Points From Drives'
          },
          xAxis: {
              categories:
              ['per game', 'per 48 mins']
          },
          yAxis: {
            title: {
              style: {
                color: "#FFF"
            },
            text: 'Points'
              }
          },
          series: [{
              name: players[0].name,
              data: [players[0].points_from_drives_per_game, players[0].pts_48_on_drives]
          }]
      });
  });
  for(var x=0; x < players.length; x++){
    $('#player_dropdown').append(" <option value='" + players[x].name + "'>" + players[x].name + "</option>")
  }

  $("#player_dropdown").change(function(){
      var new_player = $("#player_dropdown option:selected").text()
        current_player = playerFinder(new_player, players)
        updatePlayerAttributes(current_player)
        $(function() {
        $('#points_container').highcharts({
            chart: {
                type: 'bar',
                backgroundColor:'transparent'
            },
            title: {
              style: {
                color: "#FFF"
              },
                text: 'Points From Drives'
            },
            xAxis: {
                categories: ['per game', 'per 48 mins']
            },
            yAxis: {
                title: {
                  style: {
                    color: "#FFF"
                  },
                    text: 'Points'
                }
            },
            series: [{
                name: current_player.name,
                data: [current_player.points_from_drives_per_game, current_player.pts_48_on_drives]
            }]
        });
    });
  });
});
