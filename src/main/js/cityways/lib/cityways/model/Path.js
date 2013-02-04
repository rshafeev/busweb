

cityways.model.Path = cityways.type.Class({

			pathID : null,

			input : null,

			out : null,

			transitions : [],

			routes : [],
			/**
			 * 
			 * @param {Object}
			 *            mainPage
			 */
			initialize : function(pathData) {
				cityways.Util.extend(this, pathData);

			},
			
			/**
			 * Возвращает стоимть пути
			 */
			getFullCost : function() {
				if (this.routes == null)
					return 0.0;
				var cost = 0.0;
				for (var i = 0; i < this.routes.length; i++) {
					cost += this.routes[i].cost;
				}
				/*Отформатируем строку*/
				return cost;
			},
			
			/**
			 * Возвращает время передвижения пешком, String
			 */
			getWalkingTime : function(){
				var time = 0.0;
				for(var i=0;i < this.transitions.length; i++)
				{
					time += this.transitions[i].moveTimeSecs;
				}
				time += this.input.moveTimeSecs;
				time += this.out.moveTimeSecs;			 
				return cityways.helper.Time.secsToLocaleString(time);
			}

		});