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
var DiagramStankey_exports = {};
__export(DiagramStankey_exports, {
  default: () => DiagramStankey_default
});
module.exports = __toCommonJS(DiagramStankey_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiagramStankeyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M608 296C608 282.75 597.25 272 584 272H56C42.75 272 32 282.75 32 296S42.75 320 56 320H178.4L267.406 468.344C271.75 475.578 279.562 480 288 480H584C597.25 480 608 469.25 608 456S597.25 432 584 432H301.594L234.398 320H584C597.25 320 608 309.25 608 296ZM56 240H248C256.438 240 264.25 235.578 268.594 228.344L357.594 80H584C597.25 80 608 69.25 608 56S597.25 32 584 32H344C335.562 32 327.75 36.422 323.406 43.656L234.406 192H56C42.75 192 32 202.75 32 216S42.75 240 56 240Z" })
  }
));
DiagramStankeyRegular.displayName = "DiagramStankeyRegular";
var DiagramStankey_default = DiagramStankeyRegular;
