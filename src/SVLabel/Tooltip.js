var svl = svl || {};

/**
 *
 * @param $
 * @param param
 * @returns {{className: string}}
 * @constructor
 * @memberof svl
 */
function Tooltip ($, param) {
    var self = {className: 'Tooltip'};
    var properties = {};
    var status = {};

    var $divToolTip;

    ////////////////////////////////////////
    // Private functions
    ////////////////////////////////////////
    function _init(param) {
        $divToolTip = $(param.domIds.tooltipHolder);
    }

    ////////////////////////////////////////
    // Public functions
    ////////////////////////////////////////
    self.show = function (message) {
        $divToolTip.html(message);
        $divToolTip.css('visibility', 'visible');
    };

    self.hide = function () {
        $divToolTip.css('visibility', 'hidden');
    };

    _init(param);
    return self;
}
