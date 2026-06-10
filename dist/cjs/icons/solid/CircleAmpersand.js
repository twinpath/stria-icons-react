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
var CircleAmpersand_exports = {};
__export(CircleAmpersand_exports, {
  default: () => CircleAmpersand_default
});
module.exports = __toCommonJS(CircleAmpersand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleAmpersandSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM356 377.719C351.406 381.922 345.594 384 339.812 384C333.312 384 326.844 381.375 322.094 376.188L303.469 355.812C288.688 373.594 266.719 384 243.312 384H210.844C174 384 144 354.016 144 317.156C144 296.859 153.062 277.906 168.844 265.172L198.594 241.125L188.25 229.797C177.188 217.687 171.125 202.016 171.125 185.656C171.125 153.859 197 128 228.781 128H251.906C283.688 128 309.562 153.859 309.562 185.656C309.562 203.156 301.75 219.516 288.156 230.516L268.469 246.406L298.207 278.932L319.969 247C327.469 236.078 342.375 233.203 353.344 240.688C364.281 248.141 367.125 263.078 359.656 274.031L331.502 315.344L357.531 343.812C366.469 353.594 365.781 368.766 356 377.719ZM236.031 210.906L257.969 193.172C260.25 191.344 261.563 188.594 261.563 185.656C261.562 180.328 257.219 176 251.906 176H228.781C223.469 176 219.125 180.328 219.125 185.656C219.125 190.016 220.75 194.203 223.688 197.438L236.031 210.906ZM199 302.516C194.531 306.094 192 311.438 192 317.156C192 327.547 200.469 336 210.844 336H243.312C253.344 336 262.688 331.062 268.312 322.797L270.43 319.691L231.062 276.609L199 302.516Z" })
  }
));
CircleAmpersandSolid.displayName = "CircleAmpersandSolid";
var CircleAmpersand_default = CircleAmpersandSolid;
