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
var InboxIn_exports = {};
__export(InboxIn_exports, {
  default: () => InboxIn_default
});
module.exports = __toCommonJS(InboxIn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const InboxInThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M250.344 285.656C253.469 288.781 258.531 288.781 261.656 285.656L384.484 162.828C386.047 161.266 386.828 159.234 386.828 157.172S386.047 153.078 384.484 151.516C381.359 148.391 376.297 148.391 373.172 151.516L264 260.687V8C264 3.594 260.422 0 256 0S248 3.594 248 8V260.687L138.828 151.516C135.703 148.391 130.641 148.391 127.516 151.516S124.391 159.703 127.516 162.828L250.344 285.656ZM472 320H352C348.969 320 346.188 321.719 344.844 324.437L315.062 384H196.938L167.156 324.437C165.812 321.719 163.031 320 160 320H40C17.938 320 0 337.937 0 360V472C0 494.062 17.938 512 40 512H472C494.062 512 512 494.062 512 472V360C512 337.937 494.062 320 472 320ZM496 472C496 485.219 485.219 496 472 496H40C26.781 496 16 485.219 16 472V360C16 346.781 26.781 336 40 336H155.062L184.844 395.562C186.188 398.281 188.969 400 192 400H320C323.031 400 325.812 398.281 327.156 395.562L356.938 336H472C485.219 336 496 346.781 496 360V472Z" })
  }
));
InboxInThin.displayName = "InboxInThin";
var InboxIn_default = InboxInThin;
