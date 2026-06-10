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
var HomeSimple_exports = {};
__export(HomeSimple_exports, {
  default: () => HomeSimple_default
});
module.exports = __toCommonJS(HomeSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HomeSimpleDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.968 270.531V448C511.968 483.346 483.315 512 447.969 512H128C92.654 512 64 483.346 64 448V270.516L287.975 74.541L511.968 270.531Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.997 256.01C575.997 280.488 553.799 287.998 543.981 287.998C536.512 287.998 528.997 285.405 522.919 280.093L287.998 74.542L53.078 280.093C46.991 285.396 39.479 288 32.005 288C23.533 288 0 281.286 0 256.01C0 248.631 2.669 239.143 10.922 231.908L266.92 7.921C272.952 2.64 280.475 0 287.999 0C295.522 0 303.045 2.641 309.076 7.921L565.074 231.908C573.341 239.154 575.997 248.642 575.997 256.01Z " })
    ]
  }
));
HomeSimpleDuotone.displayName = "HomeSimpleDuotone";
var HomeSimple_default = HomeSimpleDuotone;
