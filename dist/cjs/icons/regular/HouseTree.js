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
const HouseTreeRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M628.207 432.625L581.715 378.875C590.838 374.25 598.461 366.75 603.211 357.125C611.209 340.625 609.084 320.875 597.711 306.5L541.598 235C551.471 230 559.469 221.75 564.092 211.125C571.717 193.5 568.092 173.125 554.844 159.125L418.869 15.125C409.746 5.375 397.248 0 384 0S358.254 5.375 349.131 15L263.611 105.568L299.137 137.871L384 48L519.977 192H446.863L559.969 336H481.107L591.963 464H416V464.188C416 482.188 409.771 498.633 399.656 512H591.963C610.709 512 627.832 501 635.705 483.875C643.453 466.75 640.578 446.75 628.207 432.625ZM224 288H160C151.125 288 144 295.125 144 304V368C144 376.875 151.125 384 160 384H224C232.875 384 240 376.875 240 368V304C240 295.125 232.875 288 224 288ZM215.477 105.078C208.82 99.025 200.408 96 191.996 96S175.172 99.025 168.514 105.078L17.141 242.689C6.225 252.613 0 266.684 0 281.438V464C0 490.51 21.49 512 48 512H335.992C362.502 512 383.992 490.693 383.992 464.184C383.996 423.518 384 365.59 384 320.627V281.107C384 266.455 377.818 252.656 366.977 242.801L215.477 105.078ZM335.992 464H48V281.438C48 280.209 48.521 279.031 49.43 278.207L191.996 148.602L334.689 278.318C335.559 279.109 336 280.047 336 281.107L335.992 464Z" })
  }
));
HouseTreeRegular.displayName = "HouseTreeRegular";
var HouseTree_default = HouseTreeRegular;
