/*! ========================================================================
 * Bootstrap Toggle: bootstrap-toggle.js v2.2.0
 * http://www.bootstraptoggle.com
 * ========================================================================
 * Copyright 2014 Min Hur, The New York Times Company
 * Licensed under MIT
 * ======================================================================== */

+function($){'use strict';var Toggle=function(element,options){this.$element=$(element)
this.options=$.extend({},this.defaults(),options)
this.render()}
Toggle.VERSION='2.2.0'
Toggle.DEFAULTS={on:'On',off:'Off',onstyle:'primary',offstyle:'secondary',size:'normal',style:'',width:null,height:null,id:null}
Toggle.prototype.defaults=function(){return{on:this.$element.attr('data-on')||Toggle.DEFAULTS.on,off:this.$element.attr('data-off')||Toggle.DEFAULTS.off,onstyle:this.$element.attr('data-onstyle')||Toggle.DEFAULTS.onstyle,offstyle:this.$element.attr('data-offstyle')||Toggle.DEFAULTS.offstyle,size:this.$element.attr('data-size')||Toggle.DEFAULTS.size,style:this.$element.attr('data-style')||Toggle.DEFAULTS.style,width:this.$element.attr('data-width')||Toggle.DEFAULTS.width,height:this.$element.attr('data-height')||Toggle.DEFAULTS.height,id:this.$element.attr('id')||Toggle.DEFAULTS.id}}
Toggle.prototype.render=function(){this._onstyle='btn-'+this.options.onstyle
this._offstyle='btn-'+this.options.offstyle
var size=this.options.size==='large'?'btn-lg':this.options.size==='small'?'btn-sm':this.options.size==='mini'?'btn-xs':''
var $toggleOn=$('<label class="btn">').html(this.options.on).addClass(this._onstyle+' '+size)
var $toggleOff=$('<label class="btn">').html(this.options.off).addClass(this._offstyle+' '+size+' active')
var $toggleHandle=$('<span class="toggle-handle btn btn-secondary">').addClass(size)
var $toggleGroup=$('<div class="toggle-group">').append($toggleOn,$toggleOff,$toggleHandle)
var $toggle=$('<div class="toggle btn" data-toggle="toggle">').addClass(this.$element.prop('checked')?this._onstyle:this._offstyle+' off').addClass(size).addClass(this.options.style)
this.$element.wrap($toggle)
$.extend(this,{$toggle:this.$element.parent(),$toggleOn:$toggleOn,$toggleOff:$toggleOff,$toggleGroup:$toggleGroup})
this.$toggle.append($toggleGroup)
var width=this.options.width||Math.max($toggleOn.outerWidth(),$toggleOff.outerWidth())+($toggleHandle.outerWidth()/2)
var height=this.options.height||Math.max($toggleOn.outerHeight(),$toggleOff.outerHeight())
$toggleOn.addClass('toggle-on')
$toggleOn.attr('id',this.options.id)
$toggleOff.addClass('toggle-off')
$toggleOff.attr('id',this.options.id)
this.$toggle.css({width:width,height:height})
if(this.options.height){$toggleOn.css('line-height',$toggleOn.height()+'px')
$toggleOff.css('line-height',$toggleOff.height()+'px')}
this.update(!0)
this.trigger(!0)}
Toggle.prototype.toggle=function(){if(this.$element.prop('checked'))this.off()
else this.on()}
Toggle.prototype.on=function(silent){if(this.$element.prop('disabled'))return!1
this.$toggle.removeClass(this._offstyle+' off').addClass(this._onstyle)
this.$element.prop('checked',!0)
if(!silent)this.trigger()}
Toggle.prototype.off=function(silent){if(this.$element.prop('disabled'))return!1
this.$toggle.removeClass(this._onstyle).addClass(this._offstyle+' off')
this.$element.prop('checked',!1)
if(!silent)this.trigger()}
Toggle.prototype.enable=function(){this.$toggle.removeAttr('disabled')
this.$element.prop('disabled',!1)}
Toggle.prototype.disable=function(){this.$toggle.attr('disabled','disabled')
this.$element.prop('disabled',!0)}
Toggle.prototype.update=function(silent){if(this.$element.prop('disabled'))this.disable()
else this.enable()
if(this.$element.prop('checked'))this.on(silent)
else this.off(silent)}
Toggle.prototype.trigger=function(silent){this.$element.off('change.bs.toggle')
if(!silent)this.$element.change()
this.$element.on('change.bs.toggle',$.proxy(function(){this.update()},this))}
Toggle.prototype.destroy=function(){this.$element.off('change.bs.toggle')
this.$toggleGroup.remove()
this.$element.removeData('bs.toggle')
this.$element.unwrap()}
function Plugin(option){return this.each(function(){var $this=$(this)
var data=$this.data('bs.toggle')
var options=typeof option=='object'&&option
if(!data)$this.data('bs.toggle',(data=new Toggle(this,options)))
if(typeof option=='string'&&data[option])data[option]()})}
var old=$.fn.bootstrapToggle
$.fn.bootstrapToggle=Plugin
$.fn.bootstrapToggle.Constructor=Toggle
$.fn.toggle.noConflict=function(){$.fn.bootstrapToggle=old
return this}
$(function(){$('input[type=checkbox][data-toggle^=toggle]').bootstrapToggle()})
$(function(){$('.toggle-on').click(function()
{$('#'+$(this).attr('id')).bootstrapToggle('off')})
$('.toggle-off').click(function()
{$('#'+$(this).attr('id')).bootstrapToggle('on')})})}(jQuery)