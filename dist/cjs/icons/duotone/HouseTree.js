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
var HouseTree_exports = {};
__export(HouseTree_exports, {
  default: () => HouseTree_default
});
module.exports = __toCommonJS(HouseTree_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseTreeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M606.438 512.029H405.574C411.855 501.844 415.664 489.973 415.666 477.154L415.674 281.312C415.67 257.693 405.615 235.008 388.082 219.068L287 127.178L396.455 8.279C406.453 -2.721 424.951 -2.721 434.951 8.279L569.939 154.779C583.439 169.529 571.939 192.029 550.566 192.029H505.82L600.688 303.529C616.936 322.779 603.063 352.029 577.439 352.029H541.443L631.311 455.654C650.184 477.404 635.061 512.029 606.438 512.029Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M215.477 105.107C202.162 93.002 181.828 93.002 168.514 105.107L17.139 242.72C6.223 252.646 0 266.715 0 281.467V477.119C0 496.4 15.629 512.029 34.908 512.029H349.084C368.361 512.029 383.99 496.429 383.992 477.15C383.996 424.568 384 328.992 384 281.31C383.998 266.58 377.783 252.656 366.883 242.746L215.477 105.107ZM240 368.029C240 376.904 232.875 384.029 224 384.029H160C151.125 384.029 144 376.904 144 368.029V304.029C144 295.154 151.125 288.029 160 288.029H224C232.875 288.029 240 295.154 240 304.029V368.029Z" })
    ]
  }
));
HouseTreeDuotone.displayName = "HouseTreeDuotone";
var HouseTree_default = HouseTreeDuotone;
