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
var KnifeKitchen_exports = {};
__export(KnifeKitchen_exports, {
  default: () => KnifeKitchen_default
});
module.exports = __toCommonJS(KnifeKitchen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KnifeKitchenRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M566.249 43.225L531.124 9.348C518.202 -3.115 497.054 -3.117 484.128 9.346L303.817 183.217C297.296 189.506 297.292 199.953 303.812 206.246L393.71 293.039C399.519 298.646 408.593 299.049 414.874 293.979L438.251 275.104C444.501 269.104 448.001 260.979 448.001 252.479V207.979L566.249 88.6C579.249 76.1 579.249 55.725 566.249 43.225ZM443.31 155.289C437.054 161.539 426.95 161.539 420.694 155.289S414.439 138.914 420.694 132.664S437.054 126.414 443.31 132.664S449.566 149.039 443.31 155.289ZM507.31 91.287C501.054 97.537 490.948 97.537 484.692 91.287S478.437 74.912 484.692 68.662S501.054 62.412 507.31 68.662C513.564 74.912 513.564 85.162 507.31 91.287ZM390.405 334.986C381.109 326.031 366.388 326.041 357.101 335.01L302.304 387.934C251.46 436.984 183.692 463.996 111.485 463.996C101.521 463.996 91.593 463.467 81.749 462.422L284.185 267.17C293.954 257.73 293.942 242.068 284.157 232.641C274.864 223.689 260.153 223.693 250.866 232.65L4.888 469.859C-3.862 478.234 -0.362 492.484 11.388 496.357C44.198 506.877 77.993 512 111.485 512C194.228 512 275.212 480.768 335.63 422.482L390.46 369.559C400.304 360.057 400.296 344.514 390.442 335.021L390.405 334.986Z" })
  }
));
KnifeKitchenRegular.displayName = "KnifeKitchenRegular";
var KnifeKitchen_default = KnifeKitchenRegular;
