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
var Soap_exports = {};
__export(Soap_exports, {
  default: () => Soap_default
});
module.exports = __toCommonJS(Soap_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SoapThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M408 192C403.578 192 400 195.594 400 200S403.578 208 408 208C456.531 208 496 247.469 496 296V408C496 456.531 456.531 496 408 496H104C55.469 496 16 456.531 16 408V296C16 247.469 55.469 208 104 208H224C228.422 208 232 204.406 232 200S228.422 192 224 192H104C46.656 192 0 238.656 0 296V408C0 465.344 46.656 512 104 512H408C465.344 512 512 465.344 512 408V296C512 238.656 465.344 192 408 192ZM160 272C115.891 272 80 307.875 80 352S115.891 432 160 432H352C396.109 432 432 396.125 432 352S396.109 272 352 272H160ZM416 352C416 387.281 387.297 416 352 416H160C124.703 416 96 387.281 96 352S124.703 288 160 288H352C387.297 288 416 316.719 416 352ZM320 240C355.346 240 384 211.346 384 176S355.346 112 320 112S256 140.654 256 176S284.654 240 320 240ZM320 128C346.467 128 368 149.533 368 176S346.467 224 320 224S272 202.467 272 176S293.533 128 320 128ZM208 96C234.51 96 256 74.51 256 48S234.51 0 208 0S160 21.49 160 48S181.49 96 208 96ZM208 16C225.645 16 240 30.355 240 48S225.645 80 208 80S176 65.645 176 48S190.355 16 208 16ZM384 64C401.674 64 416 49.674 416 32S401.674 0 384 0S352 14.326 352 32S366.326 64 384 64ZM384 16C392.822 16 400 23.178 400 32S392.822 48 384 48S368 40.822 368 32S375.178 16 384 16Z" })
  }
));
SoapThin.displayName = "SoapThin";
var Soap_default = SoapThin;
