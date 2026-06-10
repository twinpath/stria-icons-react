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
const UpRightFromSquareDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 320C366.326 320 352 334.328 352 352V448H64V160.004H160C177.674 160.004 192 145.68 192 128.004S177.674 96.004 160 96.004H64C28.654 96.004 0 124.656 0 160.004V448C0 483.344 28.654 512 64 512H352C387.346 512 416 483.344 416 448V352C416 334.328 401.674 320 384 320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512.373 24V160C512.373 172.938 504.592 184.609 492.623 189.562C480.623 194.469 466.904 191.766 457.748 182.625L427.685 152.562L248.933 331.319C230.188 350.064 199.797 350.062 181.055 331.316L181.054 331.316C162.314 312.573 162.315 282.187 181.057 263.444L359.81 84.687L329.748 54.625C320.592 45.469 317.842 31.719 322.81 19.75C327.748 7.797 339.435 0 352.373 0H488.373C501.628 0 512.373 10.745 512.373 24Z" })
    ]
  }
));
UpRightFromSquareDuotone.displayName = "UpRightFromSquareDuotone";
var UpRightFromSquare_default = UpRightFromSquareDuotone;
