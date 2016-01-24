(function ($) {
    // 1. 创建 `plugin` 代码
    var pluginName = function ($select, option) {
        // 用于定义变量的位置
        this.$el = $select;
        this.settiongs = $.extend({
            // 默认配置
            name: "pluginName",
            version: "0.0.1"
        }, option | {});

        // 绑定期望的事件
        var that = this;
        this.$el.click(function (e) {
            that.log();
        });
    };

    // todo 注意位置
    // 2. 为 `plugin` 添加方法，所有业务相关的事件代码
    $.extend(pluginName.prototype, {
        // 定义方法
        log: function () {
            console.log("-->", this.settiongs.version);
        }
    });

    // todo 注意位置
    // 用于绑定到jquery主体中
    $.fn.pluginName = function (option) {
        return this.each(function () {
            var $select = $(this);
            if (!$select.data('flag')) {
                $select.data('flag', new pluginName($select, option));
            }
        });
    };

})(jQuery);
