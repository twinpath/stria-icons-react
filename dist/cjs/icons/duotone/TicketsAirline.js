var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var TicketsAirline_exports = {};
__export(TicketsAirline_exports, {
  default: () => TicketsAirline_default
});
module.exports = __toCommonJS(TicketsAirline_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TicketsAirlineDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 160V80C640 53.5 618.5 32 592 32H144C117.5 32 96 53.5 96 80V336C96 362.5 117.5 384 144 384H592C618.5 384 640 362.5 640 336V256C613.5 256 592 234.5 592 208S613.5 160 640 160ZM406 236H363.998L315.229 316.258C313.906 318.57 311.443 320 308.791 320H278.4C273.473 319.998 269.906 315.271 271.268 310.529L294.016 236H240.994L222.104 261.195C220.777 262.961 218.699 263.998 216.498 264H198.998C194.445 264 191.107 259.719 192.215 255.303L205.996 208L192.217 160.693C191.109 156.277 194.445 152 198.998 152H216.498C218.697 152 220.777 153.037 222.104 154.803L240.996 180V180.002L294.014 180L271.268 105.459C269.906 100.719 273.471 96 278.4 96H308.791C311.17 96 314.055 97.674 315.242 99.74L364 180H406.002C421.463 180 448 192.537 448 208S421.463 236.002 406 236ZM528 320C519.164 320 512 312.836 512 304C512 295.162 519.164 288 528 288C536.838 288 544 295.162 544 304C544 312.836 536.838 320 528 320ZM528 256C519.164 256 512 248.836 512 240C512 231.162 519.164 224 528 224C536.838 224 544 231.162 544 240C544 248.836 536.838 256 528 256ZM528 192C519.164 192 512 184.836 512 176C512 167.162 519.164 160 528 160C536.838 160 544 167.162 544 176C544 184.836 536.838 192 528 192ZM528 128C519.164 128 512 120.836 512 112C512 103.162 519.164 96 528 96C536.838 96 544 103.162 544 112C544 120.836 536.838 128 528 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 432C62.326 432 48 417.672 48 400V96C21.49 96 0 117.492 0 144V416C0 451.344 28.654 480 64 480H496C522.51 480 544 458.508 544 432H80ZM198.998 264H216.498C218.699 263.998 220.777 262.961 222.104 261.195L240.994 236H294.016L271.268 310.529C269.906 315.271 273.473 319.998 278.4 320H308.791C311.443 320 313.906 318.57 315.229 316.258L363.998 236H406C421.463 236.002 448 223.463 448 208S421.463 180 406.002 180H364L315.242 99.74C314.055 97.674 311.17 96 308.791 96H278.4C273.471 96 269.906 100.719 271.268 105.459L294.014 180L240.996 180.002V180L222.104 154.803C220.777 153.037 218.697 152 216.498 152H198.998C194.445 152 191.109 156.277 192.217 160.693L205.996 208L192.215 255.303C191.107 259.719 194.445 264 198.998 264Z" })
    ]
  }
));
TicketsAirlineDuotone.displayName = "TicketsAirlineDuotone";
var TicketsAirline_default = TicketsAirlineDuotone;
