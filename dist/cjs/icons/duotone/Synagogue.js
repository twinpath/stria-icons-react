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
const SynagogueDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M70 196.549L6.625 268.293C2.355 273.125 0 279.352 0 285.799V480.029C0 497.701 14.326 512.029 32 512.029H160V275.793L90 196.549C84.688 190.535 75.311 190.535 70 196.549ZM633.375 268.293L570 196.549C564.689 190.535 555.312 190.535 550 196.549L480 275.793V512.029H608C625.674 512.029 640 497.701 640 480.029V285.799C640 279.352 637.645 273.125 633.375 268.293Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M340 7.06C328.25 -2.315 311.75 -2.315 300 7.06L172 109.427C164.375 115.552 160 124.677 160 134.427V512.029H256V419.41C256 387.537 277.75 358.039 309.25 352.914C349.375 346.414 384 377.162 384 416.035V512.029H480V134.427C480 124.677 475.625 115.552 468 109.427L340 7.06ZM392 222.547C394 225.797 391.75 229.797 388 229.797H349.125L324 269.793C322.125 272.793 317.875 272.793 316 269.793L290.875 229.797H252C248.25 229.797 246 225.797 248 222.672L267.125 192.049L248 161.551C246 158.301 248.25 154.301 252 154.301H290.875L316 114.302C317.875 111.302 322.125 111.302 324 114.302L349.125 154.301H388.125C391.75 154.301 394 158.301 392.125 161.426L372.875 192.049L392 222.547Z" })
    ]
  }
));
SynagogueDuotone.displayName = "SynagogueDuotone";
var Synagogue_default = SynagogueDuotone;
