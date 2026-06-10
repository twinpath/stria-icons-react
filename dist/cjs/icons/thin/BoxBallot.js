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
const BoxBallotThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 256H448C456.836 256 464 248.836 464 240V32C464 14.326 449.674 0 432 0H144C126.326 0 112 14.326 112 32V240C112 248.836 119.164 256 128 256ZM128 32C128 23.178 135.178 16 144 16H432C440.822 16 448 23.178 448 32V240H128V32ZM528 160H504C499.582 160 496 163.582 496 168S499.582 176 504 176H528C545.674 176 560 190.326 560 208V320H16V208C16 190.326 30.326 176 48 176H72C76.418 176 80 172.418 80 168S76.418 160 72 160H48C21.49 160 0 181.49 0 208V480C0 497.674 14.326 512 32 512H544C561.674 512 576 497.674 576 480V208C576 181.49 554.51 160 528 160ZM560 480C560 488.822 552.822 496 544 496H32C23.178 496 16 488.822 16 480V336H560V480Z" })
  }
));
BoxBallotThin.displayName = "BoxBallotThin";
var BoxBallot_default = BoxBallotThin;
