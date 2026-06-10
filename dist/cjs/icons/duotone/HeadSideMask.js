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
const HeadSideMaskDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M509.221 275C488.223 227.875 460.723 123.25 436.1 88.25C397.602 33.625 334.481 0 266.11 0H199.959C116.975 0 42.481 50.568 13.246 123.654L239.211 288H511.764C511.772 283.693 511.131 279.303 509.221 275ZM352.002 224C334.379 224 320.004 209.625 320.004 192S334.379 160 352.002 160C369.627 160 384 174.375 384 192S369.627 224 352.002 224ZM0.147 184.422C-2.166 244.211 23.01 298.062 63.994 334.875V512H224.016V316.506L3.674 156.248C1.871 165.43 0.52 174.779 0.147 184.422Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.988 224C369.613 224 383.986 209.625 383.986 192S369.613 160 351.988 160C334.365 160 319.99 174.375 319.99 192S334.365 224 351.988 224ZM335.996 368H495.986L511.986 320H256V512H401.863C429.41 512 453.865 494.371 462.576 468.238L463.988 464H335.996C327.16 464 319.996 456.836 319.996 448C319.996 439.162 327.16 432 335.996 432H474.656L485.322 400H335.996C327.16 400 319.996 392.836 319.996 384C319.996 375.162 327.16 368 335.996 368Z" })
    ]
  }
));
HeadSideMaskDuotone.displayName = "HeadSideMaskDuotone";
var HeadSideMask_default = HeadSideMaskDuotone;
