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
var Key_exports = {};
__export(Key_exports, {
  default: () => Key_default
});
module.exports = __toCommonJS(Key_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KeyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M328.5 0C227.312 0 145 82.312 145 183.5C145 193.625 145.906 203.938 147.719 214.312L15.531 346.531C5.5 356.531 0 369.844 0 384V473.5C0 494.719 17.281 512 38.5 512H125.5C146.719 512 164 494.719 164 473.5V454H183.5C204.719 454 222 436.719 222 415.5V396H250C260.281 396 269.938 392 277.219 384.719L297.688 364.281C411.875 384.312 512 294.812 512 183.5C512 82.312 429.688 0 328.5 0ZM295.719 314.812L282.531 311.5L246.062 348H174V406H116V464H48V384C48 382.688 48.531 381.406 49.469 380.469L200.5 229.469L197.188 216.281C194.406 205.156 193 194.125 193 183.5C193 108.781 253.781 48 328.5 48S464 108.781 464 183.5C464 268.844 385.125 337.125 295.719 314.812ZM368 112C350.326 112 336 126.326 336 144C336 161.672 350.326 176 368 176S400 161.672 400 144C400 126.326 385.674 112 368 112Z" })
  }
));
KeyRegular.displayName = "KeyRegular";
var Key_default = KeyRegular;
