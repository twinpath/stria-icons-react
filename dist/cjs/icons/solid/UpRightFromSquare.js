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
var UpRightFromSquare_exports = {};
__export(UpRightFromSquare_exports, {
  default: () => UpRightFromSquare_default
});
module.exports = __toCommonJS(UpRightFromSquare_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpRightFromSquareSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 0H352C339.062 0 327.375 7.797 322.438 19.75C317.469 31.719 320.219 45.469 329.375 54.625L359.438 84.688L180.684 263.444C161.942 282.187 161.941 312.573 180.682 331.316L180.682 331.316C199.424 350.062 229.815 350.064 248.56 331.319L427.312 152.563L457.375 182.625C466.531 191.766 480.25 194.469 492.25 189.563C504.219 184.609 512 172.938 512 160V24C512 10.745 501.255 0 488 0ZM384 320C366.326 320 352 334.328 352 352V448H64V160.004H160C177.674 160.004 192 145.68 192 128.004S177.674 96.004 160 96.004H64C28.654 96.004 0 124.656 0 160.004V448C0 483.344 28.654 512 64 512H352C387.346 512 416 483.344 416 448V352C416 334.328 401.674 320 384 320Z" })
  }
));
UpRightFromSquareSolid.displayName = "UpRightFromSquareSolid";
var UpRightFromSquare_default = UpRightFromSquareSolid;
