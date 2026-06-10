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
var Synagogue_exports = {};
__export(Synagogue_exports, {
  default: () => Synagogue_default
});
module.exports = __toCommonJS(Synagogue_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SynagogueSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M340 7.031C328.25 -2.344 311.75 -2.344 300 7.031L172 109.398C164.375 115.523 160 124.648 160 134.398V512H256V419.381C256 387.508 277.75 358.01 309.25 352.885C349.375 346.385 384 377.133 384 416.006V512H480V134.398C480 124.648 475.625 115.523 468 109.398L340 7.031ZM392 222.518C394 225.768 391.75 229.768 388 229.768H349.125L324 269.764C322.125 272.764 317.875 272.764 316 269.764L290.875 229.768H252C248.25 229.768 246 225.768 248 222.643L267.125 192.02L248 161.521C246 158.271 248.25 154.271 252 154.271H290.875L316 114.273C317.875 111.273 322.125 111.273 324 114.273L349.125 154.271H388.125C391.75 154.271 394 158.271 392.125 161.396L372.875 192.02L392 222.518ZM70 196.52L6.625 268.264C2.356 273.096 0 279.322 0 285.771V480C0 497.673 14.327 512 32 512H128V239.641L90.01 196.531C84.702 190.508 75.315 190.502 70 196.52ZM633.297 268.175L569.989 196.508C564.68 190.497 555.302 190.502 550 196.52L512 239.641V512H608C625.673 512 640 497.673 640 480V285.889C640 279.364 637.616 273.065 633.297 268.175Z" })
  }
));
SynagogueSolid.displayName = "SynagogueSolid";
var Synagogue_default = SynagogueSolid;
