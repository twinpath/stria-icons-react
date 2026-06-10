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
var Igloo_exports = {};
__export(Igloo_exports, {
  default: () => Igloo_default
});
module.exports = __toCommonJS(Igloo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const IglooThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 32C128.941 32 0 160.941 0 320V416C0 451.348 28.654 480 64 480H512C547.346 480 576 451.348 576 416V320C576 160.941 447.059 32 288 32ZM336 52.5C412.773 66.25 478.322 112.242 518.332 176H336V52.5ZM288 48C298.844 48 309.484 48.812 320 50.055V176H57.668C105.812 99.273 190.93 48 288 48ZM16 320C16 273.742 27.674 230.18 48.131 192H112V336H16V320ZM176 384V464H64C37.533 464 16 442.469 16 416V352H181.223C178.15 362.207 176 372.805 176 384ZM384 464H192V384C192 331.062 235.062 288 288 288S384 331.062 384 384V464ZM288 272C243.492 272 205.283 298.297 187.234 336H128V192H448V336H388.766C370.717 298.297 332.508 272 288 272ZM560 416C560 442.469 538.467 464 512 464H400V384C400 372.805 397.85 362.207 394.777 352H560V416ZM560 336H464V192H527.869C548.326 230.18 560 273.742 560 320V336Z" })
  }
));
IglooThin.displayName = "IglooThin";
var Igloo_default = IglooThin;
