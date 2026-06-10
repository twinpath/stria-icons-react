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
var HeadSideMask_exports = {};
__export(HeadSideMask_exports, {
  default: () => HeadSideMask_default
});
module.exports = __toCommonJS(HeadSideMask_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeadSideMaskSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0.147 184.422C-2.166 244.211 23.01 298.062 63.994 334.875V512H224.016V316.506L3.674 156.248C1.871 165.43 0.52 174.779 0.147 184.422ZM336.01 368H496L512 320H256.014V512H401.877C429.424 512 453.879 494.371 462.59 468.238L464.002 464H336.01C327.174 464 320.01 456.836 320.01 448C320.01 439.162 327.174 432 336.01 432H474.67L485.336 400H336.01C327.174 400 320.01 392.836 320.01 384C320.01 375.162 327.174 368 336.01 368ZM509.221 275C488.223 227.875 460.723 123.25 436.1 88.25C397.602 33.625 334.481 0 266.11 0H199.959C116.975 0 42.481 50.568 13.246 123.654L239.211 288H511.764C511.772 283.693 511.131 279.303 509.221 275ZM352.002 224C334.379 224 320.004 209.625 320.004 192S334.379 160 352.002 160C369.627 160 384 174.375 384 192S369.627 224 352.002 224Z" })
  }
));
HeadSideMaskSolid.displayName = "HeadSideMaskSolid";
var HeadSideMask_default = HeadSideMaskSolid;
