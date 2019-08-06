;( function( $, window, document, undefined ) {

	"use strict";


		// Create the defaults once
        var pluginName = "ScrableBoard";
        var defaultBoardLength = 14;
        var board = $("<table class='scrable-table'></table>");

		// The actual plugin constructor
		function Plugin ( element, options ) {
			this.element = element;
			this.settings = options;
            this._name = pluginName;
            this.boardLength = this.settings && this.settings.boardLength ? this.settings.boardLength : defaultBoardLength;
			this.init();
		}

		// Avoid Plugin.prototype conflicts
		$.extend( Plugin.prototype, {
			init: function() {
                initBoard(this);
                this.element.append(board[0]);
            },
            clear: function(){
                initBoard(this);
            },
            exportTable: function(){
                return $(this.element).html();
            }, 
            totalCellEnteredCount: function(){
                return $(this.element).find("td:not(:empty)").length;
            }
        } );
        
        var initBoard = function(plugin){
            board.empty();
            for(var y = 0; y < plugin.boardLength; y++){
                var row = $("<tr></tr>");
                for(var x = 0; x < plugin.boardLength; x++){
                    var cell = $("<td></td>");
                    cell.click(editCell)
                    row.append(cell);
                }
                board.append(row);
            }
        }

        var editCell = function(event,elem){
            var that = this;
            if(elem){
                that = elem;
            }
            $(that).off('click', editCell)
            var currentValue = $(that).text();
            $(that).empty();
            var editInput = $("<input maxlength='1' />");
            editInput.val(currentValue);
            $(that).append(editInput);
            editInput.blur(function(){
                var cell = $(this).closest("td");
                var newValue = $(this).val();
                cell.empty();
                cell.append(newValue);
                cell.click(editCell)
            });
            editInput.keydown(function(event){
                if ( event.keyCode == 46 
                    || event.keyCode == 8 
                    || event.keyCode == 37 
                    || event.keyCode == 39 
                    || (event.keyCode >= 65 && event.keyCode <= 90 ))
                    {

                    }else if(event.keyCode == 9){
                        event.preventDefault();
                        var newFocusCell = $(this).closest("td").next("td");
                        $(this).blur();
                        newFocusCell.click();
                    }
                    else if(event.keyCode == 13){
                        event.preventDefault();
                        var newFocusCell = $(this).closest('tr').next().children().eq($(this).closest("td").index());
                        $(this).blur();
                        newFocusCell.click();
                    }
                    else {
                        event.preventDefault();
                    }
            });
            editInput.focus();
        }


		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
				if ( !$.data( this, "plugin_" + pluginName ) ) {
					$.data( this, "plugin_" +
						pluginName, new Plugin( this, options ) );
				}
			} );
		};

} )( jQuery, window, document );
