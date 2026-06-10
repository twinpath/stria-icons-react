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
var ClapperboardPlay_exports = {};
__export(ClapperboardPlay_exports, {
  default: () => ClapperboardPlay_default
});
module.exports = __toCommonJS(ClapperboardPlay_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClapperboardPlayLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H448C483.346 480 512 451.346 512 416V96C512 60.654 483.346 32 448 32ZM433.375 64L337.375 160H230.625L326.625 64H433.375ZM281.375 64L185.375 160H78.625L174.625 64H281.375ZM32 96C32 78.355 46.355 64 64 64H129.375L33.375 160H32V96ZM480 416C480 433.645 465.645 448 448 448H64C46.355 448 32 433.645 32 416V192H480V416ZM480 160H382.625L469.797 72.828C476.008 78.668 480 86.822 480 96V160ZM205.594 412.531C209.594 414.797 214.094 416 218.656 416C223.781 416 228.781 414.516 233 411.75L339.656 342.781C347.375 337.781 352 329.266 352 320C352 310.719 347.375 302.188 339.656 297.203L233.062 228.281C224.75 222.859 214.25 222.516 205.531 227.5C197.188 232.281 192 241.297 192 251.031V388.969C192 398.703 197.188 407.719 205.594 412.531ZM224 260.531L315.969 320L224 379.469V260.531Z" })
  }
));
ClapperboardPlayLight.displayName = "ClapperboardPlayLight";
var ClapperboardPlay_default = ClapperboardPlayLight;
