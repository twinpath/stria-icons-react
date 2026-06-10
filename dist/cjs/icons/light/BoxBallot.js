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
var BoxBallot_exports = {};
__export(BoxBallot_exports, {
  default: () => BoxBallot_default
});
module.exports = __toCommonJS(BoxBallot_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxBallotLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M528 160H496C487.156 160 480 167.156 480 176S487.156 192 496 192H528C536.812 192 544 199.172 544 208V320H32V208C32 199.172 39.188 192 48 192H80C88.844 192 96 184.844 96 176S88.844 160 80 160H48C21.531 160 0 181.531 0 208V464C0 490.469 21.531 512 48 512H528C554.469 512 576 490.469 576 464V208C576 181.531 554.469 160 528 160ZM544 464C544 472.828 536.812 480 528 480H48C39.188 480 32 472.828 32 464V352H544V464ZM144 256H432C440.844 256 448 248.844 448 240V48C448 21.531 426.469 0 400 0H176C149.531 0 128 21.531 128 48V240C128 248.844 135.156 256 144 256ZM160 48C160 39.172 167.188 32 176 32H400C408.812 32 416 39.172 416 48V224H160V48Z" })
  }
));
BoxBallotLight.displayName = "BoxBallotLight";
var BoxBallot_default = BoxBallotLight;
