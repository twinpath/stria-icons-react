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
var CheeseSwiss_exports = {};
__export(CheeseSwiss_exports, {
  default: () => CheeseSwiss_default
});
module.exports = __toCommonJS(CheeseSwiss_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CheeseSwissLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 319.875C149.5 319.875 128 341.375 128 367.875S149.5 415.875 176 415.875S224 394.375 224 367.875S202.5 319.875 176 319.875ZM187.375 379.25C184.375 382.25 180.25 384 176 384V383.875C167.125 383.875 160 376.75 160 367.875C160 359.125 167.125 351.875 176 351.875S192 359.125 192 367.875C192 372.125 190.375 376.25 187.375 379.25ZM299.875 32H298.375C291.25 32.125 284.25 34.5 278.75 39L12.35 246.266C4.557 252.328 0 261.648 0 271.521V448C0 465.6 14.4 480 32 480H480C497.6 480 512 465.6 512 448V255.875C512 136 417.999 38.25 299.875 32ZM240 127.75C248.875 127.75 256 135 256 143.75C256 152.625 248.875 159.75 240 159.75S224 152.625 224 143.75C224 135 231.125 127.75 240 127.75ZM480 448H32V287.875H323C329.625 307 347.75 319.875 368 319.875S406.375 307 413 287.875H480V448ZM352 271.875C352 263 359.125 255.875 368 255.875S384 263 384 271.875S376.875 287.875 368 287.875S352 280.75 352 271.875ZM413 255.875C406.375 236.75 388.25 223.875 368 223.875S329.625 236.75 323 255.875H52.125L192.25 146.875C193.75 171 213 190.25 237.125 191.75S282.75 176.5 287.125 152.75C291.625 129 277.75 105.625 254.625 98.25L298.625 64C400.375 69.625 480 153.75 480 255.875H413Z" })
  }
));
CheeseSwissLight.displayName = "CheeseSwissLight";
var CheeseSwiss_default = CheeseSwissLight;
