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
var SquareDownLeft_exports = {};
__export(SquareDownLeft_exports, {
  default: () => SquareDownLeft_default
});
module.exports = __toCommonJS(SquareDownLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareDownLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.166 205.09C329.535 195.719 329.535 180.516 320.166 171.148L308.854 159.836C299.484 150.465 284.281 150.465 274.912 159.836L210.342 224.406L168.969 183.031C164.375 178.438 158.234 176 152 176C148.906 176 145.781 176.594 142.812 177.812C133.844 181.531 128 190.281 128 200V328C128 341.25 138.75 352 152 352H280C289.703 352 298.453 346.156 302.172 337.188S303.828 317.906 296.969 311.031L255.596 269.656L320.166 205.09ZM448 416V96C448 60.656 419.346 32 384 32H64C28.654 32 0 60.656 0 96V416C0 451.344 28.654 480 64 480H384C419.346 480 448 451.344 448 416ZM400 416C400 424.82 392.822 432 384 432H64C55.178 432 48 424.82 48 416V96C48 87.18 55.178 80 64 80H384C392.822 80 400 87.18 400 96V416Z" })
  }
));
SquareDownLeftRegular.displayName = "SquareDownLeftRegular";
var SquareDownLeft_default = SquareDownLeftRegular;
