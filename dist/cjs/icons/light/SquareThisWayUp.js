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
var SquareThisWayUp_exports = {};
__export(SquareThisWayUp_exports, {
  default: () => SquareThisWayUp_default
});
module.exports = __toCommonJS(SquareThisWayUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareThisWayUpLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM416 416C416 433.645 401.645 448 384 448H64C46.355 448 32 433.645 32 416V96C32 78.355 46.355 64 64 64H384C401.645 64 416 78.355 416 96V416ZM352 368H96C87.156 368 80 375.156 80 384S87.156 400 96 400H352C360.844 400 368 392.844 368 384S360.844 368 352 368ZM100.031 202.531L128 170.576V320C128 328.844 135.156 336 144 336S160 328.844 160 320V170.576L187.969 202.531C191.125 206.156 195.562 208 200 208C203.75 208 207.5 206.703 210.531 204.047C217.188 198.219 217.875 188.109 212.031 181.469L156.031 117.469C149.969 110.5 138.031 110.5 131.969 117.469L75.969 181.469C70.125 188.109 70.812 198.219 77.469 204.047C84.062 209.844 94.188 209.203 100.031 202.531ZM316.031 117.469C309.969 110.5 298.031 110.5 291.969 117.469L235.969 181.469C230.125 188.109 230.813 198.219 237.469 204.047C244.063 209.844 254.219 209.203 260.031 202.531L288 170.576V320C288 328.844 295.156 336 304 336S320 328.844 320 320V170.576L347.969 202.531C351.125 206.156 355.562 208 360 208C363.75 208 367.5 206.703 370.531 204.047C377.188 198.219 377.875 188.109 372.031 181.469L316.031 117.469Z" })
  }
));
SquareThisWayUpLight.displayName = "SquareThisWayUpLight";
var SquareThisWayUp_default = SquareThisWayUpLight;
