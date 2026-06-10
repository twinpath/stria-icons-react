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
var Bicycle_exports = {};
__export(Bicycle_exports, {
  default: () => Bicycle_default
});
module.exports = __toCommonJS(Bicycle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BicycleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 224C494.727 224 478.305 227.52 463.27 233.721L367.188 36.5C365.844 33.75 363.062 32 360 32H296C291.594 32 288 35.578 288 40S291.594 48 296 48H355L409.566 160H205.648L166.719 99.656C165.25 97.375 162.719 96 160 96H104C99.594 96 96 99.578 96 104S99.594 112 104 112H155.656L191.375 167.365L160.688 228.738C150.191 225.955 139.367 224 128 224C57.307 224 0 281.307 0 352C0 422.691 57.307 480 128 480C193.211 480 246.43 431.053 254.387 368H320C323.031 368 325.812 366.281 327.156 363.578L419.133 179.631L449.102 241.154C410.406 263.17 384 304.293 384 352C384 422.691 441.309 480 512 480S640 422.691 640 352C640 281.307 582.691 224 512 224ZM128 464C66.242 464 16 413.756 16 352C16 290.242 66.242 240 128 240C136.789 240 145.25 241.262 153.461 243.188L96.844 356.422C95.594 358.906 95.75 361.844 97.188 364.203C98.656 366.562 101.219 368 104 368H238.383C230.535 422.137 184.281 464 128 464ZM168.938 248C210.453 264.404 240 304.721 240 352H116.938L168.938 248ZM176.164 233.545L201.445 182.982L310.477 352H256C256 298.371 222.953 252.592 176.164 233.545ZM321.375 339.375L215.973 176H403.062L321.375 339.375ZM512 464C450.242 464 400 413.756 400 352C400 310.689 422.734 274.936 456.102 255.521L504.812 355.5C506.188 358.344 509.031 360 512 360C513.188 360 514.375 359.734 515.5 359.188C519.469 357.25 521.125 352.469 519.188 348.5L470.336 248.227C483.242 243.025 497.258 240 512 240C573.758 240 624 290.242 624 352C624 413.756 573.758 464 512 464Z" })
  }
));
BicycleThin.displayName = "BicycleThin";
var Bicycle_default = BicycleThin;
