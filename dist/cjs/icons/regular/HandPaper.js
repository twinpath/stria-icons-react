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
var HandPaper_exports = {};
__export(HandPaper_exports, {
  default: () => HandPaper_default
});
module.exports = __toCommonJS(HandPaper_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandPaperRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M408.001 80C404.007 80 400.091 80.326 396.273 80.955C386.687 52.441 359.703 31.844 328.002 31.844C321.545 31.844 315.282 32.699 309.323 34.301C296.634 13.734 273.892 0 248.003 0C222.058 0 199.276 13.795 186.602 34.436C180.666 32.846 174.434 32 168.005 32C128.304 32 96.006 64.299 96.006 104V225.635C90.773 224.561 85.418 224.006 80.016 224.006C80.013 224.006 80.01 224.006 80.008 224.006C36.428 224.006 0 259.154 0 304.071C0 324.358 7.558 343.596 21.456 358.523L102.709 445.762C141.942 487.861 197.42 512 254.925 512C254.925 512 285.964 512 288.003 512C393.87 512 480 425.869 480 320V152C480 112.299 447.702 80 408.001 80ZM432.001 320C432.001 399.406 367.408 464 288.003 464C285.425 464 254.925 464 254.925 464C210.513 464 168.099 445.543 137.83 413.043L58.071 327.409C51.869 320.75 48.665 312.004 48.665 303.409C48.665 281.245 67.198 272.006 80.01 272.006C88.57 272.006 97.111 275.422 103.427 282.187L130.151 310.879C131.801 312.651 133.889 313.443 135.941 313.443C140.047 313.443 144.005 310.271 144.005 305.427V104C144.005 90.75 154.755 80 168.005 80C181.254 80 192.004 90.75 192.004 104V256C192.004 264.837 199.168 272 208.004 272H208.004C216.84 272 224.004 264.837 224.004 256V72C224.004 58.75 234.754 48 248.003 48C261.253 48 272.003 58.75 272.003 72V256C272.003 264.837 279.166 272 288.003 272H288.003C296.839 272 304.003 264.837 304.003 256V103.844C304.003 90.594 314.752 79.844 328.002 79.844C341.252 79.844 352.002 90.594 352.002 103.844V256C352.002 264.837 359.165 272 368.002 272H368.002C376.838 272 384.001 264.837 384.001 256V152C384.001 138.75 394.751 128 408.001 128C421.251 128 432.001 138.75 432.001 152V320Z" })
  }
));
HandPaperRegular.displayName = "HandPaperRegular";
var HandPaper_default = HandPaperRegular;
